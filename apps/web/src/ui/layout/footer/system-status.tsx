'use client';

import React, { useEffect, useState } from 'react';

type PageStatus = 'UP' | 'HASISSUES' | 'UNDERMAINTENANCE';
type IncidentStatus =
  | 'INVESTIGATING'
  | 'IDENTIFIED'
  | 'MONITORING'
  | 'RESOLVED';
type MaintenanceStatus = 'NOTSTARTEDYET' | 'INPROGRESS' | 'COMPLETED';

interface Incident {
  name: string;
  started: string;
  status: IncidentStatus;
  impact: string;
  url: string;
}

interface Maintenance {
  name: string;
  start: string;
  status: MaintenanceStatus;
  duration: string;
  url: string;
}

interface StatusData {
  page: {
    name: string;
    url: string;
    status: PageStatus;
  };
  activeIncidents: Incident[];
  activeMaintenances: Maintenance[];
}

type GeneralStatus = PageStatus | IncidentStatus | MaintenanceStatus;

interface StatusIndicatorProps {
  status: GeneralStatus;
}

const getStatusProperties = (status: GeneralStatus) => {
  switch (status) {
    case 'UP':
    case 'RESOLVED':
      return {
        color: 'bg-primary',
        text: 'It just works',
      };
    case 'INVESTIGATING':
    case 'IDENTIFIED':
    case 'MONITORING':
      return {
        color: 'bg-yellow-600 dark:bg-yellow-500',
        text: 'Waking Sam up...',
      };
    case 'HASISSUES':
    case 'UNDERMAINTENANCE':
    case 'NOTSTARTEDYET':
    case 'INPROGRESS':
      return { color: 'bg-red-600 dark:bg-red-500', text: "We're on it" };
    default:
      return { color: 'bg-gray-400 dark:bg-gray-300', text: 'Status Unknown' };
  }
};

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const { color, text } = getStatusProperties(status);
  return (
    <div className="flex items-center gap-2">
      <div className={`h-2 w-2 rounded-full ${color}`} />
      <span className="whitespace-nowrap font-mono text-xs text-muted-foreground hover:text-primary">
        {text}
      </span>
    </div>
  );
};

const SystemStatusWidget = () => {
  const [statusData, setStatusData] = useState<StatusData | null>(null);

  useEffect(() => {
    fetch('https://yocxo.instatus.com/summary.json')
      .then((response) => response.json())
      .then((data) => setStatusData(data as StatusData))
      .catch((error) => console.error('Error fetching status data:', error));
  }, []);

  return (
    <a
      href="https://yocxo.instatus.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Yo CXO's system status page on Instatus in a new window"
    >
      <div className="hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4 sm:mb-0">
        {statusData && (
          <div>
            <StatusIndicator status={statusData.page.status} />
            {statusData.activeIncidents?.map((incident, index) => (
              <StatusIndicator key={index} status={incident.status} />
            ))}
            {statusData.activeMaintenances?.map((maintenance, index) => (
              <StatusIndicator key={index} status={maintenance.status} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default SystemStatusWidget;

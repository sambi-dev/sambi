import { cn } from '@sambi/ui';

const AirbnbLogo = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Airbnb logo"
      viewBox="0 0 311.273 96"
      {...props}
      className={cn('h-12 w-28 fill-muted-foreground', props.className)}
    >
      <path d="M164.05 24.122c0 3.459-2.822 6.246-6.321 6.246a6.269 6.269 0 0 1-6.319-6.246c0-3.462 2.723-6.246 6.319-6.246 3.601.096 6.321 2.88 6.321 6.246ZM137.99 36.71v1.539s-3.014-3.846-9.431-3.846c-10.601 0-18.865 7.977-18.865 19.025 0 10.956 8.169 19.025 18.865 19.025 6.516 0 9.431-3.936 9.431-3.936v1.629c0 .771.582 1.347 1.361 1.347h7.875V35.362h-7.875a1.388 1.388 0 0 0-1.361 1.347Zm0 23.156c-1.457 2.118-4.375 3.942-7.875 3.942-6.225 0-10.991-3.843-10.991-10.38 0-6.534 4.765-10.377 10.991-10.377 3.404 0 6.516 1.92 7.875 3.939v12.879Zm15.072-24.503h9.335v36.131h-9.335V35.363Zm139.444-.96c-6.417 0-9.434 3.846-9.434 3.846V17.973h-9.332v53.524h7.875a1.382 1.382 0 0 0 1.361-1.347v-1.632s3.014 3.939 9.431 3.939c10.601 0 18.865-8.07 18.865-19.025 0-10.953-8.265-19.028-18.764-19.028Zm-1.556 29.309c-3.599 0-6.417-1.824-7.878-3.939V46.895c1.46-1.92 4.57-3.939 7.878-3.939 6.225 0 10.988 3.843 10.988 10.377 0 6.537-4.762 10.38-10.988 10.38Zm-22.071-13.644v21.524h-9.338V51.124c0-5.958-1.943-8.361-7.191-8.361-2.822 0-5.737 1.443-7.59 3.558v25.175h-9.332V35.365h7.389c.777 0 1.361.672 1.361 1.344v1.539c2.723-2.787 6.321-3.846 9.92-3.846 4.081 0 7.485 1.155 10.211 3.462 3.302 2.691 4.567 6.15 4.567 12.204Zm-56.111-15.665c-6.417 0-9.431 3.846-9.431 3.846V17.973h-9.338v53.524h7.878a1.382 1.382 0 0 0 1.361-1.347v-1.632s3.017 3.939 9.431 3.939c10.601 0 18.865-8.07 18.865-19.025.099-10.956-8.166-19.028-18.767-19.028Zm-1.556 29.306c-3.599 0-6.417-1.824-7.875-3.939V46.895c1.457-1.92 4.567-3.939 7.875-3.939 6.225 0 10.988 3.843 10.988 10.377 0 6.537-4.762 10.38-10.988 10.38ZM185.932 34.4c2.816 0 4.276.48 4.276.48v8.553s-7.779-2.595-12.64 2.883V71.59h-9.338V35.363h7.878c.78 0 1.361.675 1.361 1.347v1.539c1.751-2.019 5.545-3.846 8.46-3.846ZM88.978 68.23c-.486-1.155-.972-2.403-1.457-3.462-.78-1.728-1.556-3.363-2.237-4.899l-.096-.096A996.853 996.853 0 0 0 63.696 16.34l-.291-.582a188.239 188.239 0 0 1-2.333-4.515c-.972-1.731-1.943-3.555-3.5-5.286C54.458 2.115 49.99 0 45.225 0c-4.864 0-9.239 2.115-12.445 5.766-1.46 1.728-2.531 3.555-3.503 5.286a207.651 207.651 0 0 1-2.333 4.518l-.291.576C19.165 30.561 11.875 45.167 5.164 59.579l-.099.192c-.681 1.542-1.46 3.171-2.24 4.902a65.415 65.415 0 0 0-1.455 3.459C.105 71.687-.285 75.05.203 78.512a20.465 20.465 0 0 0 12.64 15.951A20.16 20.16 0 0 0 20.721 96c.777 0 1.748-.096 2.531-.192a25.891 25.891 0 0 0 9.722-3.267c3.985-2.211 7.779-5.382 12.058-9.993 4.276 4.611 8.169 7.782 12.058 9.993A25.932 25.932 0 0 0 69.344 96c2.723 0 5.443-.48 7.875-1.539A20.428 20.428 0 0 0 89.862 78.51c.771-3.363.384-6.726-.881-10.281Zm-43.852 4.992c-5.251-6.534-8.655-12.684-9.821-17.871-.486-2.211-.582-4.131-.291-5.865.192-1.536.777-2.88 1.556-4.035 1.847-2.592 4.96-4.227 8.559-4.227s6.807 1.536 8.556 4.227c.78 1.152 1.361 2.502 1.559 4.035.291 1.731.192 3.75-.291 5.865-1.172 5.091-4.576 11.241-9.827 17.871Zm38.799 4.518c-.681 4.995-4.084 9.321-8.849 11.244-2.333.96-4.861 1.251-7.389.96a19.334 19.334 0 0 1-7.389-2.499c-3.503-1.92-7.002-4.899-11.084-9.321 6.415-7.782 10.304-14.895 11.764-21.236a23.767 23.767 0 0 0 .486-8.169 15.476 15.476 0 0 0-2.627-6.534c-3.017-4.326-8.073-6.825-13.711-6.825s-10.697 2.595-13.711 6.825a15.491 15.491 0 0 0-2.627 6.534 19.782 19.782 0 0 0 .486 8.169c1.46 6.342 5.446 13.548 11.767 21.332-3.985 4.422-7.587 7.401-11.087 9.321-2.531 1.443-4.96 2.211-7.389 2.502a15.729 15.729 0 0 1-7.389-.96c-4.765-1.926-8.169-6.252-8.849-11.247a15.721 15.721 0 0 1 .873-7.494c.291-.963.78-1.923 1.265-3.075a185.409 185.409 0 0 1 2.237-4.806l.099-.192a1042.698 1042.698 0 0 1 21.391-43.148l.291-.576c.78-1.44 1.559-2.979 2.336-4.422.777-1.536 1.652-2.979 2.723-4.227 2.042-2.304 4.762-3.555 7.779-3.555s5.737 1.251 7.779 3.555c1.071 1.251 1.946 2.694 2.723 4.23.78 1.44 1.556 2.979 2.333 4.419l.291.576a1266.061 1266.061 0 0 1 21.297 43.244v.096c.78 1.542 1.46 3.267 2.24 4.809.483 1.149.969 2.109 1.263 3.072.774 2.496 1.068 4.899.678 7.398Z" />
    </svg>
  );
};

export default AirbnbLogo;
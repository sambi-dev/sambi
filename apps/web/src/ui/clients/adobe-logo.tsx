import { cn } from '@sambi/ui';

const AdobeLogo = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Adobe logo"
      viewBox="0 0 215.767 96"
      {...props}
      className={cn('h-16 w-40 fill-muted-foreground', props.className)}
    >
      <path d="m36.66 13.67 15.534 66.641h-11.34l-2.641-12.427H24.077l-2.641 12.427H10.097L25.631 13.67H36.66zm-.621 42.874L31.223 31.69l-4.816 24.854h9.631zM77.67 80.311l-.311-5.903h-.466c-1.553 4.505-4.816 7.456-9.01 7.456-9.942 0-14.291-11.65-14.291-26.097 0-12.427 3.262-25.786 14.291-25.786 3.883 0 5.903 1.553 8.699 5.126V13.67h9.942v66.641H77.67zm-6.99-40.233c-2.796 0-6.524 2.641-6.524 16.155 0 6.214.777 16.311 6.524 16.311 5.437 0 6.524-9.01 6.524-16.311-.155-13.515-3.883-16.155-6.524-16.155zm22.99 16c0-14.913 5.282-25.786 16.932-25.786s16.932 10.874 16.932 25.786c0 15.068-5.282 25.942-16.932 25.942-11.806.155-16.932-10.718-16.932-25.942zm23.456 0c0-13.204-2.796-16.155-6.524-16.155-2.951 0-6.524 2.33-6.524 16.155 0 14.136 3.573 16.311 6.524 16.311 4.194 0 6.524-3.883 6.524-16.311zm26.253 24.233h-9.01V13.67h10.097v22.214c2.019-4.66 6.058-5.592 8.388-5.592 10.563 0 14.447 11.029 14.447 25.786 0 14.447-3.728 26.097-14.291 26.097-4.35 0-6.99-2.33-9.01-7.456h-.311l-.311 5.592zm7.146-7.922c5.437 0 6.524-9.01 6.524-16.311 0-13.515-3.728-16.155-6.524-16.155s-6.524 2.641-6.524 16.155c0 6.369.932 16.311 6.524 16.311zm54.834-6.059c-2.485 14.602-10.718 15.845-16.155 15.845-6.214 0-16.777-2.33-16.777-25.942 0-16.621 6.835-25.786 17.243-25.786 6.524 0 16 3.728 16 26.718v2.641h-23.146c0 11.495 3.883 12.738 6.835 12.738 2.33 0 4.66-.777 5.592-6.058l10.408-.155zm-9.631-14.757c-.311-9.786-2.641-11.65-6.058-11.65-5.592 0-6.524 8.078-6.835 11.65h12.893z" />
    </svg>
  );
};

export default AdobeLogo;

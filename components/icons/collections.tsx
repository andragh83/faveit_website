export default function Collections({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3333 1.66667H12.7778V7.22222H18.3333V1.66667ZM18.3333 12.7778H12.7778V18.3333H18.3333V12.7778ZM7.22222 1.66667H1.66667V7.22222H7.22222V1.66667ZM7.22222 12.7778H1.66667V18.3333H7.22222V12.7778ZM8.88889 0V8.88889H0V0H8.88889ZM11.1111 0V8.88889H20V0H11.1111ZM11.1111 11.1111V20H20V11.1111H11.1111ZM0 11.1111V20H8.88889V11.1111H0Z"
        fill="#343434"
      />
    </svg>
  );
}

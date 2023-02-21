export default function Select({
  label,
  isError,
  textError,
  children,
  ...props
}) {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full my-2.5 appearance-none  focus:outline-none focus:border focus:border-gray-400 border border-gray-200 p-3 rounded-lg text-gray-700 text-sm font-medium"
      >
        {children}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      {isError && <p className="text-red-300 text-sm">{textError}</p>}
    </div>
  );
}

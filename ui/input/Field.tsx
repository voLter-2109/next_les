import cn from "clsx";
import { forwardRef } from "react";
import { IField } from "./feild.interface";

const CustomField = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, type = "text", ...rest }, ref) => {
    return (
      <div className={cn("mb-4 w-screen")}>
        <label>
          <span className="md-2 block w-full text-center">{placeholder}</span>
          <input
            placeholder={placeholder}
            style={{
              color: "black",
            }}
            className={cn(
              "px-4 p-2 w-full rounded-lg ",
              "border-red transition-all"
            )}
            type={type}
            ref={ref}
            {...rest}
          />
        </label>
        {error && (
          <div
            style={{ color: "red" }}
            className="!text-red-500 font-bold mt-1 w-full text-center"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

export default CustomField;

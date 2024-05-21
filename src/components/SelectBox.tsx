import * as Select from "@radix-ui/react-select";
import { FC, forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import cn from "../utils/cn";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ForEach from "../utils/ForEach";
interface SelectProps {
  options: any[];
  onValueChange?: Function;
}
const SelectDemo: FC<SelectProps> = ({ options, onValueChange }) => (
  <Select.Root
    onValueChange={(e) => {
      onValueChange && onValueChange(e);
    }}
  >
    <Select.Trigger
      className="flex items-center justify-between border-[#2F2D36] text-gray-300 border-2 focus:outline-none  rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px]  w-full text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3   data-[placeholder]:text-violet9 outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className="text-violet11">
        <FaChevronDown />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-[#2F2D36] text-gray-300  rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-red-400 text-violet11 cursor-default">
          <FaChevronUp />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          <ForEach
            items={options || []}
            render={(option) => (
              <SelectItem value={option._id} key={option._id}>
                {option.projectName}
              </SelectItem>
            )}
          />
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <FaChevronDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = forwardRef<
  HTMLDivElement,
  PropsWithChildren & HTMLAttributes<HTMLDivElement> & Select.SelectItemProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn(
        "text-[13px] cursor-pointer py-5 hover:bg-primary duration-300 leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none   ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        {/* <CheckIcon /> */}
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SelectDemo;

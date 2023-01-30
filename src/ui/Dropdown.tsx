import * as DropdownPrimitives from "@radix-ui/react-dropdown-menu";
import mergeClasses from "@/lib/merge-classes";

const Dropdown = (props: DropdownPrimitives.DropdownMenuProps) => {
  return <DropdownPrimitives.Root {...props} />;
};

// eslint-disable-next-line react/display-name
Dropdown.Trigger = (props: DropdownPrimitives.DropdownMenuTriggerProps) => {
  const { children, ...rest } = props;

  return (
    <DropdownPrimitives.Trigger
      asChild={typeof children !== "string"}
      className="outline-none"
      {...rest}
    >
      {children}
    </DropdownPrimitives.Trigger>
  );
};

// eslint-disable-next-line react/display-name
Dropdown.Content = (props: DropdownPrimitives.DropdownMenuContentProps) => {
  const { children, className, ...rest } = props;

  return (
    <DropdownPrimitives.Portal>
      <DropdownPrimitives.Content
        className={mergeClasses(
          "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md border border-accent-200 bg-primary py-2 transition-colors",
          className
        )}
        {...rest}
      >
        {children}
      </DropdownPrimitives.Content>
    </DropdownPrimitives.Portal>
  );
};

// eslint-disable-next-line react/display-name
Dropdown.Item = (props: DropdownPrimitives.DropdownMenuItemProps) => {
  const { children, className, ...rest } = props;

  return (
    <DropdownPrimitives.Item
      className={mergeClasses(
        "w-full py-3 px-4 text-sm outline-none duration-300 data-[highlighted]:bg-accent-100",
        className
      )}
      {...rest}
    >
      {children}
    </DropdownPrimitives.Item>
  );
};

export default Dropdown;

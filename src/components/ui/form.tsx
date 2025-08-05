import { Controller, FieldPath, FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { forwardRef, HTMLAttributes, LabelHTMLAttributes } from 'react';

export const Form = FormProvider;

export function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(props: {
  control: UseFormReturn<TFieldValues>['control'];
  name: TName;
  render: (data: { field: any }) => JSX.Element;
}) {
  return <Controller {...props} />;
}

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function FormItem(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={`space-y-2 ${className}`} {...props} />;
});

export const FormLabel = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(function FormLabel(
  { className = '', ...props },
  ref,
) {
  return <label ref={ref} className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`} {...props} />;
});

export const FormControl = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function FormControl(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={className} {...props} />;
});

export const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function FormMessage(
  { className = '', children, ...props },
  ref,
) {
  return (
    <p ref={ref} className={`text-sm text-red-600 ${className}`} {...props}>
      {children}
    </p>
  );
});

export type { UseFormReturn };

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch,
} from "@mui/material";
import { ReactNode } from "react";

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: ReactNode;
  className?: string;
}

export function RHFSwitch<T extends FieldValues>({ name, label }: Props<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] ? (errors[name]?.message as string) : undefined;

  return (
    <FormControl error={!!error}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            {...field}
            control={<Switch {...field} checked={field.value} />}
            label={label}
          />
        )}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

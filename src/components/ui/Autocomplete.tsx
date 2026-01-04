import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import { Option } from "../../app/(public)/landing/types/option";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
  autoHighlight?: boolean;
  disabled?: boolean;
  className?: string;
  renderOption?: (props: any, option: any) => React.ReactNode;
};

export function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
  label,
  autoHighlight = true,
  disabled = false,
  renderOption,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options || []}
          value={options?.find((item) => item.id === value) || null} // Solo un valor
          getOptionLabel={(option) =>
            options?.find((item) => item.id === option.id)?.label ?? ""
          }
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue ? newValue.id : null); // Guardar solo un ID
          }}
          renderInput={(params) => (
            <TextField
              className="group hover:border-emerald-500 transition-colors duration-200 hover:bg-border-primary"
              {...params}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
              disabled={disabled}
            />
          )}
          autoHighlight={autoHighlight}
          renderOption={renderOption} // Pass renderOption if provided
          slotProps={{
            listbox: {
              sx: {
                "& .MuiAutocomplete-option": {
                  transition: "background-color 150ms ease",

                  "&:hover": {
                    backgroundColor: "#a7f3d0", // emerald-200
                  },

                  "&.Mui-focused": {
                    backgroundColor: "#a7f3d0",
                  },

                  "&[aria-selected='true']": {
                    backgroundColor: "#d1fae5", // emerald-100
                  },
                },
              },
            },
          }}
        />
      )}
    />
  );
}

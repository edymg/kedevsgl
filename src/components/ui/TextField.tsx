import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type Props<T extends FieldValues> = {
	name: Path<T>;
	className?: string;
	placeholder?: string;
	multiline?: boolean;
} & Pick<TextFieldProps, 'label' | 'placeholder' | 'multiline' | 'rows'>;

export function RHFTextField<T extends FieldValues>({
	name,
	className,
	placeholder,
	multiline = false,
	rows = 3,
	...props
}: Props<T>) {
	const { control } = useFormContext();

	return (
		<Controller

			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextField className="bg-gray-50/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#95C11F]/50"
					{...field}
					{...props}
					error={!!error}
					helperText={error?.message}
					placeholder={placeholder}
					multiline={multiline}
					rows={multiline ? rows : undefined} // Set rows only if multiline is true
				/>
			)}
		/>
	);
}

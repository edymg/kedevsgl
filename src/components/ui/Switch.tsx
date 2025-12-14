import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormControlLabel, Switch } from '@mui/material';
import { ReactNode } from "react";



interface Props<T extends FieldValues> {
	name: Path<T>;
	label: ReactNode;
	className?: string;
}

export function RHFSwitch<T extends FieldValues>({ name, label }: Props<T>) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormControlLabel
					control={<Switch {...field} checked={field.value} />}
					label={label}
				/>
			)}
		/>
	);
}

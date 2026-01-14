import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { Assignment } from '@mui/icons-material';

type AvatarButtonProps = {
	label: string;
	fileTypes?: string[];
	allowMultiple?: boolean;
	maxFileSize?: number;
    onFileSelect?: (files: File[]) => void;
	styles?: React.CSSProperties;
}

	/*******************************************************
     * Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1. 
	 * Copyright from lib.es2015.core.d.ts
	********************************************************/
export const AvatarButton = ({
		label, 
		maxFileSize = Number.MAX_SAFE_INTEGER, 
		fileTypes, 
		allowMultiple, 
		onFileSelect,
		styles
	}:AvatarButtonProps) => {

	const inputRef = useRef<HTMLInputElement>(null);

	const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target as HTMLInputElement;
		const files = input.files;
		if (!files) 
			return;

		let allowedFiles = [];
		for (const file of files) {
			if (fileTypes?.length && !fileTypes?.includes(file.type)) {
			  console.error(`File type ${file.type} is not supported.`);
			  continue;
			}

			if (file.size > maxFileSize) {
			  console.error(`File ${file.name} is over the size limit of ${maxFileSize / 1024 / 1024}MB.`);
			  continue;
			}

			allowedFiles.push(file);
		}


		onFileSelect?.(allowedFiles);

		// reset the input value to allow selecting the same file again
		input.value = '';
	};

	return (
		<div>
			<input
				ref={inputRef}
				accept={fileTypes?.join(',')}
				multiple={allowMultiple ?? false}
				onChange={handleFileInput}
				style={{ display: 'none' }}
				type="file"
			/>
			<Button
				variant="outlined"

				fullWidth
				sx={styles}
				onClick={()=>inputRef?.current?.click()}
			>
				<img 
                    src={label} 
                    alt="Upload"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, }}
                />
			</Button>
		</div>
	);
}

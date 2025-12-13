import React, { useRef } from 'react';
type UploadButtonProps = {
	label: string;
	fileTypes?: string[];
	allowMultiple?: boolean;
	maxFileSize?: number;
    onFileSelect?: (files: File[]) => void;
}



export const UploadButton = ({label, maxFileSize = Number.MAX_SAFE_INTEGER, fileTypes, allowMultiple, onFileSelect}:UploadButtonProps) => {

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
		<button onClick={()=>inputRef?.current?.click()}>{label}</button>
	</div>
	);
}

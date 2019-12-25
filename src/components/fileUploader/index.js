import React from 'react';
import { Upload, Icon, message, Row, Col } from 'antd';
import { StyledCard } from './style';
import fileLogo from 'assets/file.svg';

const draggerProps = {
	name: 'file',
	listType: 'text',
	multiple: false,
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	}
};
const { Dragger } = Upload;

export default props => {
	return (
		<Row
			type='flex'
			gutter={{ xs: 8, sm: 16, md: 24 }}
			style={{ height: '100%', paddingBottom: 42 }}
		>
			<Col lg={{ span: 18, order: 1 }} xs={{ span: 24, order: 2 }}>
				<Dragger {...draggerProps}>
					<p className='ant-upload-drag-icon'>
						<Icon component={() => <img src={fileLogo} alt='' />} />
					</p>
					<p className='ant-upload-text blue-7'>
						Click or drag file to this area to upload
					</p>
					<p className='ant-upload-hint'>
						Support for a single or bulk upload. Strictly prohibit from
						uploading company data or other band files
					</p>
				</Dragger>
			</Col>
			<Col lg={{ span: 6, order: 2 }} xs={{ span: 24, order: 1 }}>
				<StyledCard>
					<h4>CSV Format</h4>
					<p>
						The file must be a CSV file with the and should include the next
						fields as the names of the columns:
					</p>
					<ul>
						<li>ProductID</li>
						<li>title</li>
						<li>price</li>
					</ul>
					<a href='#'>View help section</a>
				</StyledCard>
			</Col>
		</Row>
	);
};

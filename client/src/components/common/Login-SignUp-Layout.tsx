// import React from 'react';

const LSLayout = (props: { children: React.ReactNode }) => {
	return (
		<div
			style={{
				height: '100vh',
				width: '70%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				margin: 'auto',
				textAlign: 'left',
			}}
		>
			{props.children}
		</div>
	);
};

export default LSLayout;

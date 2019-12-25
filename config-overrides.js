const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#E49E4C',
			'@black': '#5A5859',
			'@checkbox-color': '#EA8C1F',
			'@link-color': '#2678D9',
			'@font-size-base': '13px',
			'@border-color-base': '#E5E5E5',
			'@input-height-base': '36px',
			'@input-color': '#727272',
			'@input-placeholder-color': '#727272',
			'@btn-height-base': '45px',
			'@btn-font-weight': '600',
			'@btn-font-size-lg': '15px'
		}
	})
);

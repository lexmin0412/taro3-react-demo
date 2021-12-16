import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { XButton } from 'taro-x-ui'
import Router from '@/utils/route'

import './index.scss'

import { runInContext } from 'evil-eval'

const code = `
    function hello(name) {
        return 'Hello ' + (name || defaultName) + '!';
    }

    module.exports = hello;
`

const sandbox = { defaultName: 'World' }
const hello = runInContext(code, sandbox)
hello()

const Index = (): JSX.Element => {
	useEffect(() => {
		console.log('process.env', process.env.TARO_ENV)
		console.log('TARO_API_BASE', TARO_API_BASE)
	}, [])

	/**
	 * 跳转demo页面
	 */
	const jumpToDemo = (demoType: 'router') => {
		switch (demoType) {
			case 'router':
				Router.navigateTo({
					url: '/demo/router/router',
				})
				break

			default:
				break
		}
	}

	return (
		<View className='index'>
			<XButton onClick={() => jumpToDemo('router')}>路由跳转</XButton>
		</View>
	)
}

export default Index

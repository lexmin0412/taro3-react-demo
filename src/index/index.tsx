import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { XButton } from 'taro-x-ui'
import Router from '@/utils/route'
import CodeService from '@/services/root/code.service'

import './index.scss'

import { runInContext } from 'evil-eval'

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

	const excuteDynamicCode = async () => {
		const result: any = await CodeService.getCodeByType({
			type: 'hello_world',
		})
		const sandbox = { defaultName: 'World' }
		const hello = runInContext(result.data, sandbox)
		console.log('hello()', hello())
	}

	return (
		<View className='index'>
			<XButton onClick={() => jumpToDemo('router')}>路由跳转</XButton>
			<XButton onClick={() => excuteDynamicCode()}>测试代码执行</XButton>
		</View>
	)
}

export default Index

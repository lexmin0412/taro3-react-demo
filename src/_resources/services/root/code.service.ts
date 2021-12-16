import BaseRequest from '@/utils/request'
import { HOSTS } from '@/constants/index'

/**
 * 药品相关服务
 */
class CodeService extends BaseRequest {
	constructor() {
		super({
			hostKey: HOSTS.TARO_API_BASE,
		})
	}

	/**
	 * 根据药品获取疾病
	 */
	getCodeByType(payload: { type: 'hello_world' | 'modal' }) {
		return this.get({
			url: '/code/hello_world',
			data: payload,
		})
	}
}

export default new CodeService()

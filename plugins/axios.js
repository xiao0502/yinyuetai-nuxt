import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '/api';

Vue.prototype.$get = (url, params) => {
	const commonParams = Object.assign({}, params);

	return new Promise((resolve, reject) => {
		axios.get(url, {params: commonParams}).then(res => {
			resolve(res.data)
		}, err => {
			reject(err)
		}).catch(error => {
			console.log(error);
		})
	})
}

Vue.prototype.$post = (url, params, isForm) => {
	return new Promise((resolve, reject) => {
		axios.post(url, isForm ? qs.stringify(params) : params).then(res => {
			resolve(res.data)
		}, err => {
			reject(err)
		}).catch(error => {
			console.log(error);
		})
	})
}
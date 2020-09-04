import Mock from 'mockjs';

// const vehicle = Mock.mock(
// 	'/api/vehicle', 'post', (req, res) => {
// 		return {
// 			code: 200,
// 			data: [{
// 				id: 1,
// 				licNumber: '陕A79898',
// 				color: 1,
// 				buyTime: '2017-04-01'
//
// 			}, {
// 				id: 1,
// 				licNumber: '陕A79898',
// 				color: 1,
// 				buyTime: '2017-04-01'
//
// 			}],
// 			message: '查询成功'
// 		}
// 	})
// )

const data = Mock.mock('/api/user', {
	'name': '@name',
	'age|1-100': 100,
	'color': '@color'
})

export default {data}

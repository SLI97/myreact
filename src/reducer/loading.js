const loading = (state = {}, action) => {
	const { type } = action;
	const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

	// 如果不是 *_REQUEST / *_SUCCESS /  *_FAILURE actions, 我们就将它们忽略
	if (!matches) return state;

	const [, requestName, requestState] = matches;
	return {
		...state,
		// 存储当前是否正在发生请求
		// 例如：当收到GET_TODOS_REQUEST的时候，isFetching为true
		// 当收到GET_TODOS_SUCCESS / GET_TODOS_FAILURE的时候，isFetching为false
		[requestName]: requestState === 'REQUEST',
	};
};

export default loading


export const createLoadingSelector = (actions) => (state) => {
	// 仅在未加载所有action时返回true
	return  actions.some(action => state.loading[action]);
};

const initState = {
    projects: [
        { id: 1, title: 't1', content: 'c1' },
        { id: 2, title: 't2', content: 'c2' },
        { id: 3, title: 't3', content: 'c3' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('created project success', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err)
            return state

        default:
            return state
    }
}

export default projectReducer
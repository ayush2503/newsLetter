import { FETCH_CATEGORIES } from "../../Types/AdminType/sectionTypes"

const SectionReducer={
    categories:[],
    articles:[],
    policies:[],
    socialLinks:[]
}

export const adminSections=(state=SectionReducer,action)=>{
    switch(action.type){
        case FETCH_CATEGORIES:
            return ({
                ...state,categories:action.payload
            })
        default:
            return({
                ...state
            })
    }
}
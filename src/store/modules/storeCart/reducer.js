import produce from 'immer';

export default function storeCart(state = [], action) {
    switch (action.type) {
        case 'ADD_SHOPCART':
            return produce(state, draft => {
                const i = draft.findIndex( item => item.id === action.item.id )
                if (i >= 0) {
                    draft[i].ammount += 1;
                } else {
                    draft.push({
                        ...action.item,
                        ammount : 1,
                    });
                }
            });
        case 'REMOVE_SHOPCART':
            return produce(state, draft => {
                const i = draft.findIndex(item => item.id === action.item.id)
                if (i >= 0) {
                    if (draft[i].ammount > 1) {
                        draft[i].ammount -= 1;
                    } else {
                        draft.splice(i, 1);
                    }
                }
            });
        case 'CLEAR_SHOPCART':
            return [];
        default:
            return state;
    }
}
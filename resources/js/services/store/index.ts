import { ref, computed } from 'vue';
import { getRequest, postRequest, putRequest, deleteRequest } from '../../services/http';

export const storeModuleFactory = (moduleName: string) => {
    const state = ref<Record<number, any>>({});

    const getters = {
        all: computed(() => Object.values(state.value)),
        getById: (id: number) => computed(() => state.value[id])
    };

    const setters = {
        setAll: (items: any[]) => {
            for (const item of items) { state.value[item.id] = Object.freeze(item);
            }
        },
        set: (item: any) => {
            state.value[item.id] = Object.freeze(item);
        },    
        deleteById: (id: number) => {
            delete state.value[id];
        },
    };

    const actions = {
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data.data);
        },
        create: async (item: any) => {
            const { data } = await postRequest(moduleName, item);
            if (!data) return;
            setters.set(data.data);
        },
        update: async (id: number, item: any) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.set(data.data);
        },
        delete: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteById(id);
        },
    };

    return { getters, setters, actions };
};

import axios from "axios";
import { da } from "element-plus/lib/locale";

const http = axios.create({
    baseURL: 'http://175.27.228.178:3434/api/private/v1/',
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
})
http.interceptors.request.use((config: any) => {
    console.log(config)
    config.headers.Authorization = sessionStorage.getItem('token')
    return config
})
const login = function (data) {
    return http.post('login',
        data
    )
}
const menus = function () {
    return http.get('menus')
}

const users = function (pagenum, pagesize, query) {
    return http.get('users', { params: { pagenum: pagenum, pagesize: pagesize, query: query } })
}

const userState = function (id, state) {
    return http.put(`users/${id}/state/${state}`)
}

const AlterUser = function (id, info) {
    return http.put(`users/${id}`, info)
}

const AddUser = function (info) {
    return http.post('users', info)
}
const delUser = function (id) {
    return http.delete(`users/${id}`)
}
const rights = function (type) {
    return http.get(`rights/${type}`)
}

const roles = function () {
    return http.get(`roles`)
}
const addRoles = function (data) {
    return http.post(`roles`, data)
}
const editRole = function (id, roleName, roleDesc) {
    return http.put(`roles/${id}`, { roleName: roleName, roleDesc: roleDesc })
}
const delRole = function (id) {
    return http.delete(`roles/${id}`)
}
const delRights = function (roleId, rightId) {
    return http.delete(`roles/${roleId}/rights/${rightId}`)
}
const setRights = function (id, rids) {
    return http.post(`roles/${id}/rights`, { rids: rids })
}
const submitUserRole = function (id, rid) {
    return http.put(`users/${id}/role`, rid)
}
const getCategories = function (type, pagenum, pagesize) {
    return http.get(`categories`, { params: { type: type, pagenum: pagenum, pagesize: pagesize } })
}

const postCategories = function (cat_pid, cat_name, cat_level) {
    return http.post(`categories`, { cat_pid: cat_pid, cat_name: cat_name, cat_level: cat_level })
}
const getAttributes = function (id, sel) {
    return http.get(`categories/${id}/attributes`, { params: { sel: sel } })
}
const addAttributes = function (id, attr_name, attr_sel, attr_vals) {
    return http.post(`categories/${id}/attributes`, { attr_name: attr_name, attr_sel: attr_sel, attr_vals: attr_vals })
}
const editCategories = function (id, cat_name) {
    return http.put(`categories/${id}`, { cat_name: cat_name })
}
const delCategories = function (id) {
    return http.delete(`categories/${id}`)
}
const postAttributes = function (id, attr_name, attr_sel, attr_vals, attrId) {
    return http.put(`categories/${id}/attributes/${attrId}`, { attr_name: attr_name, attr_sel: attr_sel, attr_vals: attr_vals })
}


const getGoods = function (query, pagenum, pagesize) {
    return http.get(`goods`, { params: { query: query, pagenum: pagenum, pagesize: pagesize } })
}
const uploadPic = function (file) {
    return http.post(`upload`, { file: file })
}
const postGoods = function (data) {
    return http.post(`goods`, data)
}
const delGoods = function (id) {
    return http.delete(`goods/${id}`)
}
const getOrders = function (info) {
    return http.get(`orders`, { params: info })
}
const getechart = function () {
    return http.get(`reports/type/1`)
}

const getKuaidi = function (id) {
    return {
        "data": [
            {
                "time": "2018-05-10 09:39:00",
                "ftime": "2018-05-10 09:39:00",
                "context": "?????????,??????????????????,????????????????????????",
                "location": ""
            },
            {
                "time": "2018-05-10 08:23:00",
                "ftime": "2018-05-10 08:23:00",
                "context": "[?????????]?????????????????????????????????????????? ???????????? 95338??????????????????",
                "location": ""
            },
            {
                "time": "2018-05-10 07:32:00",
                "ftime": "2018-05-10 07:32:00",
                "context": "???????????? [?????????????????????????????????]",
                "location": ""
            },
            {
                "time": "2018-05-10 02:03:00",
                "ftime": "2018-05-10 02:03:00",
                "context": "?????????[????????????????????????]?????????,???????????? [?????????????????????????????????]",
                "location": ""
            },
            {
                "time": "2018-05-09 23:05:00",
                "ftime": "2018-05-09 23:05:00",
                "context": "???????????? [????????????????????????]",
                "location": ""
            },
            {
                "time": "2018-05-09 21:21:00",
                "ftime": "2018-05-09 21:21:00",
                "context": "?????????[?????????????????????]?????????,???????????? [????????????????????????]",
                "location": ""
            },
            {
                "time": "2018-05-09 13:07:00",
                "ftime": "2018-05-09 13:07:00",
                "context": "???????????? ???????????????",
                "location": ""
            },
            {
                "time": "2018-05-09 12:25:03",
                "ftime": "2018-05-09 12:25:03",
                "context": "????????????",
                "location": ""
            },
            {
                "time": "2018-05-09 12:22:24",
                "ftime": "2018-05-09 12:22:24",
                "context": "??????????????????HLA?????????????????????????????????????????????????????????",
                "location": ""
            },
            {
                "time": "2018-05-08 21:36:04",
                "ftime": "2018-05-08 21:36:04",
                "context": "??????????????????",
                "location": ""
            }
        ],
        "meta": { "status": 200, "message": "???????????????????????????" }
    }

}
export {
    login, menus, users, userState, AlterUser, AddUser, delUser, rights, roles,
    delRights, addRoles, setRights, submitUserRole, getCategories, postCategories, getAttributes, postAttributes,
    getGoods, uploadPic, postGoods, getOrders, getKuaidi, getechart, delGoods, editRole, delRole, editCategories, delCategories
    , addAttributes
}
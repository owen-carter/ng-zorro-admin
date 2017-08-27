/***
 * 后端发送给前端数据格式类
 */
export class Msg {
    status: boolean;
    message: string;
    result: object;
    results: object[];
    user: object;
    userConfig: object;
    sysConfig: object;
    sysDictionary: object;
}


//型宣言
export interface Action<Type extends string> {
    type: Type
  }
  
export interface ActionWithPayload<Type extends string, Payload> {
    type: Type
    payload: Payload
  }


  export type ActionsUnion<
  A extends {
    [actionCreator: string]: (...args: any[]) => any
  }
> = Exclude<ReturnType<A[keyof A]>, (...args: any[]) => Promise<void>>
  
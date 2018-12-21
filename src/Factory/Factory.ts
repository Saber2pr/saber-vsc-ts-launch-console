/*
 * @Author: AK-12
 * @Date: 2018-12-02 13:18:58
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-12-02 13:22:39
 */
/**
 * create
 * @param c
 * @param props
 */
export let create = <C, P>(c: new (props?: P) => C, props?: P): C =>
  new c(props)

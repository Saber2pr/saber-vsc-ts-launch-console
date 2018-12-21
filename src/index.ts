/*
 * @Author: AK-12
 * @Date: 2018-12-02 13:19:02
 * @Last Modified by:   AK-12
 * @Last Modified time: 2018-12-02 13:19:02
 */
import { create } from './Factory/Factory'

class Hello {
  private mess: string
  constructor(mess: string) {
    this.mess = mess || 'hello template'
  }
  public show() {
    console.log(this.mess)
    return this.mess
  }
}

function main() {
  let hello = create(Hello, 'Hello vscode ts!')
  hello.show()
}
main()

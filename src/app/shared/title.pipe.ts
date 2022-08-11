import {Pipe} from "@angular/core";
import {formatNumber} from "@angular/common";

@Pipe({
  name: 'titlePipe'
})
export class TitlePipe {
  transform(title: string, login: string): string {
    if (login.search(/\d/) !== -1) {
      return `${title} TODOLIST`
    } else {
      return `${title}  ${login}`
    }
  }
}

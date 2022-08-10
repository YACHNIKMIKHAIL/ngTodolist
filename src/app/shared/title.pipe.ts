import {Pipe} from "@angular/core";

@Pipe({
  name: 'titlePipe'
})
export class TitlePipe {
  transform(title: string, login: string): string {
    return `${title} ${login}`

  }
}

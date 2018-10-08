import { NgModule } from '@angular/core';
import { CmpNameComponent } from './cmp-name/cmp-name';
import { ThirdpagecontentComponent } from './thirdpagecontent/thirdpagecontent';
import { HeadcontentComponent } from './headcontent/headcontent';
@NgModule({
	declarations: [CmpNameComponent,
    ThirdpagecontentComponent,
    HeadcontentComponent],
	imports: [],
	exports: [CmpNameComponent,
    ThirdpagecontentComponent,
    HeadcontentComponent]
})
export class ComponentsModule {}

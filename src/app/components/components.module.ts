import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Md5Pipe } from './md5.pipe';
import { GravatarComponent } from './gravatar/gravatar.component';
import { SafePipe } from './safe.pipe';
import { HttpModule } from '@angular/http';
import { RssService } from './rss.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpModule
  ],
  declarations: [Md5Pipe, GravatarComponent, SafePipe],
  providers: [RssService],
  exports: [GravatarComponent, SafePipe],
  entryComponents: [],
})
export class ComponentsModule {}

import { Directive, Input, OnInit, ElementRef } from '@angular/core';

import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[skaelRoleGuard]'
})
export class RoleGuardDirective implements OnInit{

  @Input() skaelRoleGuard: Array<string>;

  constructor(
    private el: ElementRef,
    private sharedService: SharedService
  ) {

  }

  ngOnInit() {
    const currentUser = this.sharedService.getCurrentUser();

    if (this.skaelRoleGuard.indexOf(currentUser.user_role) === -1) {
      this.el.nativeElement.innerHTML = '';
    }
  }

}

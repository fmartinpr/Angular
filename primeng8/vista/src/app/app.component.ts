import { Component, OnInit } from '@angular/core';
import { Menubar, MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vista';

  public items: MenuItem[]; // you know how to fill this in the "OnInit" method

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'fa fa-file-o',
        items: [{
          label: 'New',
          icon: 'fa fa-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa fa-pencil',
        items: [
          { label: 'Undo', icon: 'fa fa-mail-forward' },
          { label: 'Redo', icon: 'fa fa-mail-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'fa fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa fa-refresh',
            items: [
              { label: 'Save', icon: 'fa fa-save' },
              { label: 'Update', icon: 'fa fa-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'fa fa-phone',
            items: [
              { label: 'Delete', icon: 'fa fa-minus' }
            ]
          }
        ]
      },
      {
        label: 'Quit', icon: 'fa fa-minus'
      }
    ];
  }
}



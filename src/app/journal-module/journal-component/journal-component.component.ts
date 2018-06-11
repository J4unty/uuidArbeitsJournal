import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-component',
  templateUrl: './journal-component.component.html',
  styleUrls: ['./journal-component.component.css']
})
export class JournalComponentComponent implements OnInit {

  private owner = {
    name: 'Philipp Muggli',
    avatar: ''
  };

  public data: Object = {
    title: 'Journal content',
    content: {
      title: 'learning day 01',
      content: [
        {
          title: 'Lecture One',
          author: this.owner.name,
          avatar: '',
          content: [
            {
              type: 'text',
              // tslint:disable-next-line:max-line-length
              content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
            },
            {
              type: 'images',
              content: [
                '/assets/images/DSC_0211-EFFECTS.jpg',
                '/assets/images/DSC_0417-EFFECTS.jpg',
                '/assets/images/DSC_0433-EFFECTS.jpg'
              ]
            },
            {
              type: 'list',
              content: [
                {
                  type: 'text',
                  content: 'Lorem ipsum doler sit amat more effing text'
                },
                {
                  type: 'text',
                  content: 'More efing text so whatever this should be'
                }
              ]
            }
          ]
        }
      ]
    }
  };
  constructor() { }

  ngOnInit() {
  }
}

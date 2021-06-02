import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  teams:any =[
    {
      id: 0,
      teamName: "FC Bayern Munich",
      count : 0
    },
    {
      id: 1,
      teamName: "FC Barcelona",
      count : 0
    },
    {
      id: 2,
      teamName: "Real Madrid",
      count : 0
    },
    {
      id: 3,
      teamName: "Liverpool",
      count : 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  increaseVote(id:number){
    this.teams[id].count += 1;
  }

  decreaseVote(id:number){
    if(this.teams[id].count > 0)
      this.teams[id].count -= 1;
    else if(this.teams[id].count <=0)
      alert(this.teams[id].teamName + " vote count is 0, cannot decrease further")
  }

}

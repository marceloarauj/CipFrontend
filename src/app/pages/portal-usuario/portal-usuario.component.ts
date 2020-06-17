import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-portal-usuario',
  templateUrl: './portal-usuario.component.html',
  styleUrls: ['./portal-usuario.component.css']
})
export class PortalUsuarioComponent implements OnInit {

  treeControl = new NestedTreeControl<Modulo>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Modulo>();
  curso:string = "Fundamental";

  TREE_DATA:Modulo[] = [
    {name:'Módulo 1',canOpen:true,children:[
      {name:'Submódulo1',canOpen:true,children:[]},
      {name:'Submódulo2',canOpen:true,children:[]}
    ]},
    {name:'Módulo 2',canOpen:false,children:[
      {name:'Submódulo2',canOpen:true,children:[]}
    ]},
    {name:'Módulo 3',canOpen:false,children:[
      {name:'Submódulo3',canOpen:true,children:[]}
    ]}

  ];
  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: Modulo) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }
  
}
interface Modulo{
  name: string;
  canOpen:boolean;
  children?: Modulo[];
} 
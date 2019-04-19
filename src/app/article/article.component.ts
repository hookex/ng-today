import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

export interface Item {
  name: string;
  type: string;
  content: string;
  id: string;
}

@Component({
  selector: 'today-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  constructor(private afs: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router) {
    this.itemsCollection = afs.collection<Item>('items');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id)
    this.itemDoc = this.afs.doc<Item>(`items/${id}`);
    this.item = this.itemDoc.valueChanges();
  }

  update(item: Item) {
    // this.itemDoc.update(item);
  }

  addItem(name: string) {
    // Persist a document id
    const id = this.afs.createId();
    const item: Item = {
      id,
      name,
      type: 'article',
      content: 'Hello',
    };

    this.itemsCollection.doc(id).set(item);
  }
}

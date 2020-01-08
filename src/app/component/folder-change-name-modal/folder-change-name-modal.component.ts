import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Folder } from 'src/app/entity/folder.entity';
import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpinnerService } from 'src/app/services/spinner.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-folder-change-name-modal',
  templateUrl: './folder-change-name-modal.component.html',
  styleUrls: ['./folder-change-name-modal.component.scss']
})
export class FolderChangeNameModalComponent implements OnInit {
  // FormGroup定義
  public folderFormGroup: FormGroup;
  // Titleフォームのコントロール定義
  public titleControl: FormControl;
  public folder: Folder;
  public folderCollection: AngularFirestoreCollection<Folder>;

  // モーダルへの参照をDI
  constructor(
    public dialogRef: MatDialogRef<FolderChangeNameModalComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedFolder: Folder
  ) {}

  ngOnInit() {}

  /**
   * モーダルのキャンセルボタン押下時に呼び出し
   *
   * @memberof FolderCreateModalComponent
   */
  public onNoClick(): void {
    // モーダルを閉じる
    this.dialogRef.close();
  }
}
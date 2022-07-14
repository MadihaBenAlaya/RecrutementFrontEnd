import { FileService } from './../shared/file.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.css'],
})
export class DownloadComponent implements OnInit {
  message: string;
  progress: number;

  constructor(private fileService: FileService) {}

    ngOnInit(): void {}

    download = () => {
        this.fileService.download()
        .subscribe((response) => {
            this.message = response['message'];
        });
    }
}

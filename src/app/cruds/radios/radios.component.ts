import { Component, OnInit } from '@angular/core';
import { Radio } from '../../classes/radio'
import { RadioType } from '../../classes/radio-type'
import { RadiosService } from '../../services/radios.service'
import { BackendService } from '../../services/backend-service.service';
import { ToasterService} from 'angular2-toaster';
import { CommonModule } from '@angular/common';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

/*Ag Grid*/
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {
  public gridOptions: GridOptions;
  closeResult: string;
  radio: Radio
  radioTypes: RadioType[]
  modalRadioRef: any

  constructor(private radiosService: RadiosService, private toasterService: ToasterService, private modalService: NgbModal, private backend: BackendService) {
    this.gridOptions = <GridOptions>{};
	this.gridOptions.rowData = this.createRowData();
    this.gridOptions.columnDefs = this.createColumnDefs();
    this.gridOptions.enableFilter = false;
  }

  ngOnInit() {
	this.backend.radioTypes.getRadioTypes().subscribe(rt => {this.radioTypes = rt})	
  }

  save(radio: Radio){
    this.radiosService.addRadio(radio).subscribe(result => {
	  if(result == true){
	    this.modalRadioRef.close(result)
		this.toasterService.pop('success', 'Args Title', 'radio guardado correctamente');
	  }else{
	    this.modalRadioRef(result)
	  }
	})
  }

  private createColumnDefs() {
        return [            
            {headerName: "Radio Id", field: "radioId" },
			{headerName: "Name", field: "name"}
        ];
    }

  private createRowData() {
    return this.radiosService.radios
  }

  private open(content) {
    this.radio= new Radio()
	this.radio.radioTypeId = 1

    this.modalRadioRef = this.modalService.open(content)

	this.modalRadioRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${(reason)}`;
    });
  }
}

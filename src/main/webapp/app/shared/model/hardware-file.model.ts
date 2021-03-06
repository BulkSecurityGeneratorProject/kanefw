import { Moment } from 'moment';
import { IContent } from 'app/shared/model/content.model';
import { IHardware } from 'app/shared/model/hardware.model';

export const enum FileCategory {
    FIRMWARE = 'FIRMWARE',
    DATASHEET = 'DATASHEET',
    DESIGN = 'DESIGN',
    MANUAL = 'MANUAL'
}

export interface IHardwareFile {
    id?: number;
    title?: string;
    size?: number;
    mimeType?: string;
    dateUploaded?: Moment;
    version?: string;
    category?: FileCategory;
    content?: IContent;
    hardware?: IHardware;
}

export class HardwareFile implements IHardwareFile {
    constructor(
        public id?: number,
        public title?: string,
        public size?: number,
        public mimeType?: string,
        public dateUploaded?: Moment,
        public version?: string,
        public category?: FileCategory,
        public content?: IContent,
        public hardware?: IHardware
    ) {}
}

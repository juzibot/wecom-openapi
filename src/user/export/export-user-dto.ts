import { ApiProperty } from '@nestjs/swagger';

export class ExportUserDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description:
      'base64encode的加密密钥，长度固定为43，base64decode之后即得到AESKey。加密方式采用AES-256-CBC方式，数据采用PKCS#7填充至32字节的倍数；IV初始向量大小为16字节，取AESKey前16字节，详见：http://tools.ietf.org/html/rfc2315',
    example: 'IJUiXNpvGbODwKEBSEsAeOAPAhkqHqNCF6g19t9wfg2',
  })
  encoding_aeskey: string;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '每块数据的人员数，支持范围[104,106]，默认值为10^6',
    example: 1000000,
  })
  block_size: number;
}

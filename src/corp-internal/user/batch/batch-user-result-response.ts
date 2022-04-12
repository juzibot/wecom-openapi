import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../../../response';

export class BatchUserResultItem extends Response {
  @ApiProperty({
    type: 'string',
    required: false,
    description: '成员UserID。对应管理端的帐号',
    example: 'lisi',
  })
  userid: string;

  @ApiProperty({
    enum: [1, 2, 4, 8],
    type: 'number',
    required: false,
    description:
      '操作类型（按位或）：1 新建部门 ，2 更改部门名称， 4 移动部门， 8 修改部门排序',
    example: 1,
  })
  action: number;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '部门ID',
    example: 'lisi',
  })
  partyid: number;
}

export class BatchUserResultResponse extends Response {
  @ApiProperty({
    enum: ['sync_user', 'replace_user', 'replace_party'],
    type: 'string',
    required: false,
    description:
      '	操作类型，字节串，目前分别有：1. sync_user(增量更新成员) 2. replace_user(全量覆盖成员)3. replace_party(全量覆盖部门)',
    example: 'replace_user',
  })
  type: string;

  @ApiProperty({
    enum: [1, 2, 3],
    type: 'number',
    required: false,
    description:
      '任务状态，整型，1表示任务开始，2表示任务进行中，3表示任务已完成',
    example: 1,
  })
  status: number;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '任务运行总条数',
    example: 1,
  })
  total: number;

  @ApiProperty({
    type: 'number',
    required: false,
    description: '目前运行百分比，当任务完成时为100',
    example: 'lisi',
  })
  percentage: number;

  @ApiProperty({
    type: BatchUserResultItem,
    isArray: true,
    required: false,
    description: '详细的处理结果，具体格式参考下面说明。当任务完成后此字段有效',
  })
  result: BatchUserResultItem[];
}

object Form1: TForm1
  AlignWithMargins = True
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 499
  ClientWidth = 733
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  OnDestroy = FormDestroy
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 15
    Top = 229
    Width = 53
    Height = 13
    Caption = #1047#1072#1075#1086#1083#1086#1074#1086#1082
  end
  object Label2: TLabel
    Left = 15
    Top = 275
    Width = 24
    Height = 13
    Caption = #1058#1077#1083#1086
  end
  object Label3: TLabel
    Left = 15
    Top = 405
    Width = 22
    Height = 13
    Caption = #1058#1101#1075#1080
  end
  object Label4: TLabel
    Left = 15
    Top = 106
    Width = 42
    Height = 13
    Caption = #1056#1091#1073#1088#1080#1082#1080
  end
  object Image1: TImage
    Left = 600
    Top = 14
    Width = 120
    Height = 105
    Proportional = True
    Stretch = True
  end
  object Edit1: TEdit
    Left = 15
    Top = 248
    Width = 427
    Height = 21
    TabOrder = 0
  end
  object Memo1: TMemo
    Left = 15
    Top = 294
    Width = 427
    Height = 105
    ScrollBars = ssVertical
    TabOrder = 1
  end
  object Edit2: TEdit
    Left = 15
    Top = 432
    Width = 427
    Height = 21
    TabOrder = 2
  end
  object Button1: TButton
    Left = 384
    Top = 466
    Width = 75
    Height = 25
    Caption = #1054#1090#1087#1088#1072#1074#1080#1090#1100
    TabOrder = 3
    OnClick = Button1Click
  end
  object RichEdit1: TRichEdit
    Left = 222
    Top = 125
    Width = 220
    Height = 81
    Font.Charset = RUSSIAN_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Times New Roman'
    Font.Style = []
    ParentFont = False
    ScrollBars = ssVertical
    TabOrder = 4
  end
  object Button2: TButton
    Left = 496
    Top = 466
    Width = 75
    Height = 25
    Caption = 'Button2'
    TabOrder = 5
    OnClick = Button2Click
  end
  object Button3: TButton
    Left = 624
    Top = 466
    Width = 75
    Height = 25
    Caption = 'Button3'
    TabOrder = 6
    OnClick = Button3Click
  end
  object ListBox1: TListBox
    Left = 15
    Top = 125
    Width = 201
    Height = 81
    ItemHeight = 13
    TabOrder = 7
    OnDblClick = ListBox1DblClick
  end
  object Memo2: TMemo
    Left = 448
    Top = 125
    Width = 272
    Height = 274
    ScrollBars = ssVertical
    TabOrder = 8
  end
  object Button4: TButton
    Left = 8
    Top = 466
    Width = 75
    Height = 25
    Caption = #1056#1077#1076#1072#1082#1090#1086#1088
    TabOrder = 9
    OnClick = Button4Click
  end
  object Button5: TButton
    Left = 448
    Top = 8
    Width = 131
    Height = 25
    Caption = #1044#1086#1073#1072#1074#1080#1090#1100' '#1088#1091#1073#1088#1080#1082#1091
    TabOrder = 10
    OnClick = Button5Click
  end
  object Button6: TButton
    Left = 448
    Top = 39
    Width = 131
    Height = 25
    Caption = #1042#1099#1074#1077#1089#1090#1080' sin-'#1092#1072#1081#1083
    TabOrder = 11
    OnClick = Button6Click
  end
  object MyConnection1: TMyConnection
    Database = 'vik'
    Username = 'root'
    Server = 'localhost'
    Left = 16
    Top = 8
  end
  object MyQuery1: TMyQuery
    Connection = MyConnection1
    Left = 128
    Top = 8
  end
  object MyTable1: TMyTable
    TableName = 'node_revision'
    Connection = MyConnection1
    Left = 72
    Top = 8
  end
  object OpenDialog1: TOpenDialog
    Left = 248
    Top = 8
  end
  object MyDataSource1: TMyDataSource
    Left = 184
    Top = 8
  end
end

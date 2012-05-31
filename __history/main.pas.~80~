unit main;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Data.DB, DBAccess, MyAccess, MemDS,
  Vcl.StdCtrls, Datasnap.DBClient, SimpleDS, Vcl.ComCtrls, ComObj, Vcl.Menus, StrUtils,
  Vcl.ExtCtrls, Vcl.OleCtrls, SHDocVw_EWB, EwbCore, EmbeddedWB, IdBaseComponent,
  IdComponent, IdTCPConnection, IdTCPClient, IdHTTP, Vcl.DBCtrls,
  IWVCLBaseControl, IWBaseControl, IWBaseHTMLControl, IWControl, IWDBStdCtrls, mshtml,
  Vcl.Buttons;

type
  TForm1 = class(TForm)
    PageControl1: TPageControl;
    TabSheet1: TTabSheet;
    Label1: TLabel;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Image1: TImage;
    Edit1: TEdit;
    Memo1: TMemo;
    Button1: TButton;
    Button2: TButton;
    Button3: TButton;
    ListBox1: TListBox;
    Memo2: TMemo;
    Button4: TButton;
    Button5: TButton;
    Button6: TButton;
    OpenDialog1: TOpenDialog;
    Panel1: TPanel;
    TabSheet3: TTabSheet;
    Edit3: TEdit;
    Memo3: TMemo;
    Label5: TLabel;
    Label6: TLabel;
    MainMenu1: TMainMenu;
    N1: TMenuItem;
    N2: TMenuItem;
    N3: TMenuItem;
    TreeView1: TTreeView;
    ListBox2: TListBox;
    BitBtn1: TBitBtn;
    Button7: TButton;
    N4: TMenuItem;
    N5: TMenuItem;
    EmbeddedWB1: TEmbeddedWB;
    procedure Button1Click(Sender: TObject);
    procedure Button3Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure Button4Click(Sender: TObject);
    procedure ListBox1DblClick(Sender: TObject);
    procedure Button6Click(Sender: TObject);
    procedure Button5Click(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure Button2Click(Sender: TObject);
    procedure Image1Click(Sender: TObject);
    procedure TabSheet3Show(Sender: TObject);
    procedure TreeView1Change(Sender: TObject; Node: TTreeNode);
    procedure Button7Click(Sender: TObject);
    procedure Delay(Value: Cardinal);
    procedure FormShow(Sender: TObject);
    procedure N3Click(Sender: TObject);
    procedure N5Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

type
  TSinonims = record
    id  : integer;
    parent : integer;
    txt: string[50];
end;

TNewThread = class(TThread)
  private
    { Private declarations }
    procedure logout;
    procedure addnews;
    procedure fedpress;
  protected

  end;

var
  Form1: TForm1;
  sin_mas: array of TSinonims;
  sin_file: file of TSinonims;
  sin_word: TSinonims;
  str: string; //рабочая строка
  str_rub: string; //строка с рубриками
  fl: integer; //флаг выхода из цикла обработки рубрик
  lg: integer; //длина строки
  id_rubr:integer; //id рубрики в листбоксе
  mas_alf: array [0..33] of string=('а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',' ');
  mas: array of string;    //массив расширенной выборки
  a, b, e: string;    //рабочие переменные
  NewThread: TNewThread; //потоковая переменная

implementation

{$R *.dfm}

uses edit, Unit3;


procedure TNewThread.logout;
begin
Form1.EmbeddedWB1.Navigate('http://fedpress.ru/logout/');
end;
procedure TNewThread.addnews;
begin
Form1.EmbeddedWB1.Navigate('http://fedpress.ru/node/add/news');
end;

procedure TNewThread.fedpress;
begin
  Form1.EmbeddedWB1.Navigate('http://fedpress.ru/');
end;

procedure racshirenie(s: string);
var i,j,k:integer;
begin
  SetLength(mas, length(s)*length(mas_alf)+length(s)+(length(s)+1)*length(mas_alf)+(length(s)-1));
  k:=0;
  for i:=1 to length(s) do        //замена
    begin
    for j:=0 to length(mas_alf)-1 do
      begin
      mas[k]:=StuffString(s, i, 1, mas_alf[j]);
      inc(k);
      end;
    end;

  for i:=1 to length(s) do        //удаление
      begin
      mas[k]:=s;
      Delete(mas[k], i, 1);
      inc(k);
      end;

  for i:=1 to length(s)+1 do        //вставка
    begin
    for j:=0 to length(mas_alf)-1 do
      begin
      mas[k]:=StuffString(s, i, 0, mas_alf[j]);
      inc(k);
      end;
    end;

  for i:=1 to length(s)-1 do        //перестановка
      begin
      b:=s;
      a:=s[i+1];
      insert(a,b,i);
      delete(b,i+2,1);
      mas[k]:=b;
      inc(k);
      end;
end;

procedure poisk(s: string; x:integer);
var i:integer;
begin
  for i:=0 to length(sin_mas)-1 do     //поиск id родителя по файлу
    begin
    e:=AnsiLowerCase(sin_mas[i].txt);
    if e=s then
      begin
      if sin_mas[i].parent=0 then fl:=sin_mas[i].id
         else fl:=sin_mas[i].parent;
      break;
      end;
    end;
  for i:=0 to length(sin_mas)-1 do    //поиск родителя
    if sin_mas[i].id=fl then begin Form1.ListBox1.Items[x]:=sin_mas[i].txt; break; end;
end;

procedure TForm1.Delay(Value: Cardinal);
var
  F, N: Cardinal;
begin
  N := 0;
  while N <= (Value div 10) do
  begin
    SleepEx(1, True);
    Application.ProcessMessages;
    Inc(N);
  end;
  F := GetTickCount;
  repeat
    Application.ProcessMessages;
    N := GetTickCount;
  until (N - F >= (Value mod 10)) or (N < F);
end;

procedure TForm1.Button1Click(Sender: TObject);
var
a:variant;
b:variant;
i: integer;
j, j_gr: integer;

begin
//выбор проекта
a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-project-news-value');
for i:=0 to a.length-1 do
 begin
 if a.item(i,0).innerText='Fedpress' then
       begin
       a.selectedIndex:=i;
       break;
       end;
 end;

//выбор автора
a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-author-news-value');
for i:=0 to a.length-1 do
 begin
 if a.item(i,0).innerText='Алексей Остапов' then
       begin
       a.selectedIndex:=i;
       break;
       end;
 end;

//выбор формата размещения
for j:=0 to ListBox1.Count-1 do
begin
 if ListBox1.Items[j]='Актуальные сюжеты' then
      begin
      a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-format-postion-news-value-16-checkbox');
      a.checked:='checked';
      end;
  if ListBox1.Items[j]='В ленту' then
      begin
      a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-format-postion-news-value-17-checkbox');
      a.checked:='checked';
      end;
  if ListBox1.Items[j]='Тема дня (Fedpress)' then
      begin
      a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-format-postion-news-value-1354-checkbox');
      a.checked:='checked';
      end;
  if ListBox1.Items[j]='Главная новость' then
      begin
      a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-format-postion-news-value-18-checkbox');
      a.checked:='checked';
      end;
  if ListBox1.Items[j]='Тема дня (World News)' then
      begin
      a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-format-postion-news-value-614-checkbox');
      a.checked:='checked';
      end;
  if ListBox1.Items[j]='Отображать на сайте' then
      begin
      a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-format-postion-news-value-19-checkbox');
      a.checked:='checked';
      end;
  if ListBox1.Items[j]='Разрешить коментарии' then
      begin
      a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-format-postion-news-value-20-checkbox');
      a.checked:='checked';
      end;
end;

a:=EmbeddedWB1.oleobject.document.all.tags('label');
//выбор региона
a:=EmbeddedWB1.oleobject.document.all.tags('label');
for j:=0 to ListBox1.Count-1 do
begin
for i:=0 to 130 do
 begin
 if AnsiContainsStr(a.item(i,0).innerText,ListBox1.Items[j])=true then
       begin
       try
       b:=EmbeddedWB1.oleobject.document.getelementbyid(a.item(i,0).htmlFor);
       b.click;
       except
       end;
       break;
       end;
 end;
end;

//выбор рубрики
{  a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-project-news-fedpress-value');
  b:=EmbeddedWB1.oleobject.document.all.tags('optgroup');

j_gr:=-1;
for i:=0 to a.length-1 do
 begin
 if a.item(i,0).innerText='Аналитика' then
       begin
       inc(j_gr);
       if b.item(j_gr,0).label='Экономика и бизнес' then
           begin
           a.selectedIndex:=i;
           break;
           end;
       end;
 end;   }

a:=EmbeddedWB1.oleobject.document.all.tags('select');
for j:=0 to ListBox1.Count-1 do
begin
  for i:=0 to a.length-1 do
    begin
      if a.item(i,0).innerText=ListBox1.Items[j] then begin  a.selectedIndex:=i; a.click; break; end;
    end;
end;

//Заголовок
a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-title');
a.value:=Edit1.Text;

//Аннотация
a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-anons-news-0-value');
b:=copy(Memo1.Lines.Text,1,AnsiPos(#13,Memo1.Lines.Text));
if Length(b)>500 then begin b:=copy(b,1,500); b:=copy(b,1,LastDelimiter('.', b)); end;
a.value:=b;

//Тело
//EmbeddedWB2.Navigate('http://fedpress.ru/sites/all/libraries/tinymce/jscripts/tiny_mce/plugins/paste/pasteword.htm?S');
//!!!!!EmbeddedWB2.ExecScript('http://fedpress.ru/sites/all/libraries/tinymce/jscripts/tiny_mce/plugins/paste/pasteword.htm','JavaScript');
//!!!!!http://fedpress.ru/sites/all/libraries/tinymce/jscripts/tiny_mce/plugins/paste/pasteword.htm?S
//a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-body_code').click;
//a:=EmbeddedWB1.oleobject.document.getelementbyid('htmlSource');
//Sleep(20000);
//a.value:=Memo1.Text;
//Sleep(10000);
//a:=EmbeddedWB1.oleobject.document.getelementbyid('insert').click;
//EmbeddedWB1.oleobject.document.getelementbyid('edit-body_pastetext').click;

//EmbeddedWB1.oleobject.document.getelementbyid('edit-body').click;
//a.value:=Memo1.Text;

//Теги
a:=EmbeddedWB1.oleobject.document.getelementbyid('field_tags_news[value]');
a.value:=Memo3.Lines.Text;
Delay(10000);
//a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-images-news-0-filefield-upload').click;
//сохранить новость
//Delay(10000);
a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-images-news-0-filefield-upload').click;
//a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-submit').click;
Showmessage('Новость успешно сохранена');
Edit3.Clear;
ListBox1.Clear;
Memo3.Clear;
Edit1.Clear;
Memo1.Clear;
Image1.Picture:= nil;
Image1.Enabled:=false;
Button1.Enabled:=false;
Button3.Enabled:=false;
end;

procedure TForm1.Button2Click(Sender: TObject);
begin
{

function DelDat(c:integer):integer;
begin

Reset(F);
 while not Eof(F) do
    begin
      read(F, DummyMember);
      Members[FilePos(F)-1]:=DummyMember;
      j:=FilePos(F);
    end;

Rewrite(F);     //очистка файла, перевод указателя на
                //начало первого компонента файла

for i:=0 to j-1 do
  begin
  if i=x then continue
   else
   begin
   Write(F, Members[i]);
   end;
  end;

end;

//////////

y:=0;  //проверка по файлу
AssignFile(F,s+'\psw.dat');
Reset(F);
 while not Eof(F) do
    begin
      read(F, DummyMember);
      if DummyMember.polz=s1 then y:=1;
    end;
CloseFile(F);

//////////////

if (y=0) then      //добавить в файл
   begin
    ComboBox1.Items.Add(s1);
    DummyMember.polz:=s1;
    DummyMember.sumxor:='';
    AssignFile(F,s+'\psw.dat');
    Reset(F);
    Seek(F,FileSize(F));
    write(F, DummyMember);
    CloseFile(F);
   end;

/////////////

AssignFile(F,s+'\psw.dat');
DelDat(x);
CloseFile(F);

unction DelDat(c:integer):integer;
begin

Reset(F);
 while not Eof(F) do
    begin
      read(F, DummyMember);
      Members[FilePos(F)-1]:=DummyMember;
      j:=FilePos(F);
    end;

Rewrite(F);     //очистка файла, перевод указателя на
                //начало первого компонента файла

for i:=0 to j-1 do
  begin
  if i=x then continue
   else
   begin
   Write(F, Members[i]);
   end;
  end;

end;


//////////////////////

procedure TForm1.FormShow(Sender: TObject);
var ss:string;
flag:boolean;
begin
AssignFile(F,s+'\psw.dat');
  flag:=true;
  Reset(F);
  while not Eof(F) do
      begin
      read(F, DummyMember);
      ADOQuery1.SQL.Clear;
      ADOQuery1.SQL.Add('select Polzovatel from Groups');
      ADOQuery1.SQL.Add('where Polzovatel="'+DummyMember.polz+'";');
      ADOQuery1.Open;
      if ADOQuery1.RecordCount=1 then
         begin
         ComboBox1.Items.Add(DummyMember.polz);
         end
         else
         begin
         Deldat(FilePos(F)-1);
         Reset(F);
         end;
      end;

ADOQuery1.SQL.Clear;
ADOQuery1.SQL.Add('select Polzovatel from Groups;');
ADOQuery1.Open;
AssignFile(F,s+'\psw.dat');
Reset(F);
for i:=0 to ADOQuery1.RecordCount-1 do
  begin
   ss:=ADOQuery1.FieldByName('Polzovatel').value;
   Reset(F);
   j:=0;
   while not Eof(F) do
      begin
      read(F, DummyMember);
      if ss=DummyMember.polz then begin j:=1; break; end;
      end;
   if j=0 then begin
               ComboBox1.Items.Add(ss);
               seek(F, FileSize(F));
               DummyMember.polz:=ss;
               DummyMember.sumxor:='';
               write(F,DummyMember);
               end;
   ADOQuery1.Next;
   end;
CloseFile(F);
end;

//////////////

вход по ентеру
procedure TForm2.Edit1KeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
if ord(key)=13 then Button1.Click;
end;


}

end;

procedure TForm1.Button3Click(Sender: TObject);
var COM_Word: olevariant;
    j, l, i: integer;
begin
  try
    if OpenDialog1.Execute then
    begin
    Memo2.Clear;
    ListBox1.Clear;
    Edit1.Clear;
    Memo1.Clear;
    Memo3.Clear;
    Edit3.Text:=OpenDialog1.FileName;
    COM_Word := CreateOLEObject('Word.Application');
    COM_Word.Visible := False;
    COM_Word.Documents.Open(OpenDialog1.FileName);
    Com_Word.ActiveDocument.Select;
    COM_Word.Selection.Copy;
    Memo2.PasteFromClipboard;
    COM_Word.DisplayAlerts := False;
    COM_Word.Quit;

{//begin заглушка
str:=Memo2.Lines.Text;
str_rub:=Copy(str,1,AnsiPos('[',str)-1);  //копируем все до зага  (рубрики, подписи, ссылки)
RichEdit1.Lines.Add(str_rub);

Delete(str_rub,AnsiPos(#13,str_rub)+1,length(str_rub)-1);
Repeat     //разделяем слова по запятым.
 begin
  a:=Copy(str_rub,1,AnsiPos(',',str_rub)-1);
  a:=Trim(a);
  a:=AnsiLowerCase(a);
  ListBox1.Items.Add(a);
  Delete(str_rub,1,AnsiPos(',',str_rub));
  if AnsiPos(',',str_rub)=0 then
      begin
      a:=Copy(str_rub,1,AnsiPos(#13,str_rub)-1);
      a:=Trim(a);
      a:=AnsiLowerCase(a);
      ListBox1.Items.Add(a);
      end;
 end;
until AnsiPos(',',str_rub)=0;

AssignFile(sin_file,'D:\Client_site\Sinonims.dat'); //подключаемся к файлу
Reset(sin_file);
Seek(sin_file,0);
i:=0;
while not Eof(sin_file) do
begin
  Setlength(sin_mas,i+1);
  read(sin_file, sin_word);
  sin_mas[i]:=sin_word;
  inc(i);
end;
CloseFile(sin_file);      //закрыли файл, дальше работаем с массивом

for l:=0 to ListBox1.Count-1 do
begin
  fl:=-1;
  poisk(ListBox1.Items[l], l);
  if fl=-1 then begin
                racshirenie(ListBox1.Items[l]);
                for j:=0 to length(mas)-1 do
                begin
                  poisk(mas[j], l);
                  if fl<>-1 then break;
                end;
                end;

if fl=-1 then showmessage('Не найдена рубрика '+ListBox1.Items[l]);

end;
//end заглушка   }

str:=Memo2.Lines.Text;
str_rub:=Copy(str,1,AnsiPos('[',str)-1);  //копируем все до зага  (рубрики, подписи, ссылки)

Delete(str,1,AnsiPos('[',str));  //удаляем все до зага
Edit1.Text:=Copy(str,1,AnsiPos(']',str)-1);  //копируем заг

Delete(str,1,AnsiPos('[',str)); //удаляем заг
Memo1.Lines.Text:=Copy(str,1,AnsiPos(']',str)-1); //копируем тело

Delete(str,1,AnsiPos('[',str)); //удаляем тело

str:=Copy(str,1,AnsiPos(']',str)-1);  //копируем тэги
lg:=length(str);                          // на случай
for i:=1 to lg do                         // если тэги
  begin                                   // написаны
  if str[i]=#13 then str[i]:=' ';         // по старинке
  if str[i]=#10 then str[i]:=' ';         // в столбик
  end;
Memo3.Lines.Text:=str;


Repeat     //разделяем рубрики по запятым
 begin
  a:=Copy(str_rub,1,AnsiPos(',',str_rub)-1);
  a:=Trim(a);
  a:=AnsiLowerCase(a);
  ListBox1.Items.Add(a);
  Delete(str_rub,1,AnsiPos(',',str_rub));
  if AnsiPos(',',str_rub)=0 then
      begin
      a:=Copy(str_rub,1,AnsiPos(#13,str_rub)-1);
      a:=Trim(a);
      a:=AnsiLowerCase(a);
      ListBox1.Items.Add(a);
      end;
 end;
until AnsiPos(',',str_rub)=0;


AssignFile(sin_file,'D:\Client_site\Sinonims.dat'); //подключаемся к файлу
Reset(sin_file);
Seek(sin_file,0);
i:=0;
while not Eof(sin_file) do
begin
  Setlength(sin_mas,i+1);
  read(sin_file, sin_word);
  sin_mas[i]:=sin_word;
  inc(i);
end;
CloseFile(sin_file);      //закрыли файл, дальше работаем с массивом

for l:=0 to ListBox1.Count-1 do
begin
  fl:=-1;
  poisk(ListBox1.Items[l], l);
  if fl=-1 then begin
                racshirenie(ListBox1.Items[l]);
                for j:=0 to length(mas)-1 do
                begin
                  poisk(mas[j], l);
                  if fl<>-1 then break;
                end;
                end;

if fl=-1 then showmessage('Не найдена рубрика '+ListBox1.Items[l]);

end;
    end;
  finally
    COM_Word := UnAssigned;
  end;
Image1.Enabled:=true;
end;

procedure TForm1.Button4Click(Sender: TObject);
begin
Form2.Show;
end;

procedure TForm1.Button5Click(Sender: TObject);
var i:integer;
    s: string;
begin
s:= InputBox('Добавление новой рубрики', '', '');

AssignFile(sin_file,'D:\Client_site\Sinonims.dat'); //подключаемся к файлу
Reset(sin_file);
Seek(sin_file,0);
i:=0;
while not Eof(sin_file) do  begin inc(i); read(sin_file, sin_word); end;
sin_word.id:=i+1;
sin_word.parent:=0;
sin_word.txt:=s;
write(sin_file, sin_word);
CloseFile(sin_file);
end;

procedure TForm1.Button6Click(Sender: TObject);
var i:integer;
begin
Memo2.Clear;
AssignFile(sin_file,'D:\Client_site\Sinonims.dat'); //подключаемся к файлу
Reset(sin_file);
Seek(sin_file,0);
i:=0;
while not Eof(sin_file) do
begin
  Setlength(sin_mas,i+1);
  read(sin_file, sin_word);
  Memo2.Lines.Add(inttostr(sin_word.id)+^I+inttostr(sin_word.parent)+^I+sin_word.txt);
  inc(i);
end;
CloseFile(sin_file);
end;

procedure TForm1.Button7Click(Sender: TObject);
begin
NewThread.addnews;
Button3.Enabled:=true;
end;

procedure TForm1.FormClose(Sender: TObject; var Action: TCloseAction);
begin
EmbeddedWB1.Navigate('http://fedpress.ru/logout/');
Delay(3000);
end;

procedure TForm1.FormCreate(Sender: TObject);
var i:integer;
begin
//s:=GetCurrentDir;  //установелние текущего каталога
if FileExists('D:\Client_site\Sinonims.dat')=false then  //проверка наличия файла
  begin
    showmessage('Словарь рубрик не найден!');
  end;
end;

procedure TForm1.FormShow(Sender: TObject);
begin
  NewThread:=TNewThread.Create(true);
  NewThread.FreeOnTerminate:=true;
  NewThread.Priority:=tpNormal;
  NewThread.fedpress;
  Image1.Picture:=nil;
end;

procedure TForm1.Image1Click(Sender: TObject);
var a:variant;
begin
a:=EmbeddedWB1.oleobject.document.getelementbyid('edit-field-images-news-0-upload');
a.click;
Image1.Picture.LoadFromFile(vartostr(a.value));
Button1.Enabled:=true;

end;

procedure TForm1.ListBox1DblClick(Sender: TObject);
begin
//по двойному клику вызвать привязку
id_rubr:=ListBox1.ItemIndex;
Form2.Edit1.Text:=ListBox1.Items[ListBox1.ItemIndex];
Form2.Show;
end;


procedure TForm1.N3Click(Sender: TObject);
begin
Form3.show;
end;

procedure TForm1.N5Click(Sender: TObject);
begin
NewThread.logout;
Form1.MainMenu1.Items[3].Visible:=false;
Form1.MainMenu1.Items[2].Visible:=true;
end;

procedure TForm1.TabSheet3Show(Sender: TObject);
var itm:integer;
begin
AssignFile(sin_file,'D:\Client_site\Sinonims.dat'); //подключаемся к файлу
Reset(sin_file);
Seek(sin_file,0);
while not Eof(sin_file) do
begin
  read(sin_file, sin_word);
  if sin_word.parent=0 then begin
    TreeView1.Items.Add(nil,sin_word.txt);
  end;
end;
CloseFile(sin_file);
end;

procedure TForm1.TreeView1Change(Sender: TObject; Node: TTreeNode);
var itm:integer;
begin
AssignFile(sin_file,'D:\Client_site\Sinonims.dat'); //подключаемся к файлу
Reset(sin_file);
Seek(sin_file,0);
itm:=TreeView1.Selected.AbsoluteIndex;
while not Eof(sin_file) do
begin
  read(sin_file, sin_word);
  if sin_word.txt=TreeView1.Items[itm].Text then begin
    itm:=sin_word.id;
    break;
  end;
end;

//Reset(sin_file);
ListBox2.Clear;
Seek(sin_file,0);
while not Eof(sin_file) do
begin
  read(sin_file, sin_word);
  if sin_word.parent=itm then begin
    Listbox2.Items.Add(sin_word.txt);
  end;
end;
CloseFile(sin_file);
end;

end.

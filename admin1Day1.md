# Admin 1 - LAB1


<br>

## 1. Difference Between `cat` and `more`

- **cat**: Displays entire file at once.
- **more**: Displays file page by page (useful for long files).


## 2. Difference Between `rm` and `rmdir` 

- **rm**: Removes files or directories (with `-r` option).
- **rmdir**: Removes **empty** directories only.


## 3. File Hierarchy Setup

```bash
macbook@MacBook ~ % cd ~
macbook@MacBook ~ % mkdir -p dir1/dir11 dir1/dir12 docs
macbook@MacBook ~ % touch dir1/dir11/file1
macbook@MacBook ~ % touch docs/mycv
```

### a. Remove `dir11` in one step
```bash
macbook@MacBook ~ % rm -r dir1/dir11
```

### b. Remove `dir12` using `rmdir -p`
```bash
macbook@MacBook ~ % rmdir -p dir1/dir12
```

### c. File Path for `mycv`
- **Absolute path**: `/Users/macbook/docs/mycv`
- **Relative path**: `docs/mycv`



## 5. Copy `/etc/passwd` to home as `mypasswd`

```bash
macbook@MacBook ~ % cp /etc/passwd ~/mypasswd
```



## 6. Rename `mypasswd` to `oldpasswd`

```bash
macbook@MacBook ~ % mv ~/mypasswd ~/oldpasswd
```



## 7. Four Ways to Navigate Home from `/usr/bin`

```bash
cd ~
cd $HOME
cd
```


## 8. List Commands in `/usr/bin` Starting with `w`

```bash
macbook@MacBook ~ % ls /usr/bin/w*
```



## 9. First 4 Lines of `/etc/passwd`

```bash
macbook@MacBook ~ % head -n 4 /etc/passwd
```



## 10. Last 7 Lines of `/etc/passwd`

```bash
macbook@MacBook ~ % tail -n 7 /etc/passwd
```



## 11. Display `man` Page for `passwd` (File Format - Section 5)

```bash
macbook@MacBook ~ % man 5 passwd
```



## 12. Display `man` Page for `passwd` (Command)

```bash
macbook@MacBook ~ % man passwd
```



## 13. Search for All `man` Pages Containing "passwd"

```bash
macbook@MacBook ~ % man -k passwd
```

---

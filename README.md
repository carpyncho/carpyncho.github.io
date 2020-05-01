# Carpyncho web client

![Logo](https://github.com/carpyncho/carpyncho.github.io/raw/master/static/logo.png)

Carpyncho, a data mining catalog browser which we hope will reutilized to search for and characterize
time variable data of the ~PiB size [VVV/VVVx](https://vvvsurvey.org/)`[1]` survey.

Carpyncho is being developed for the detection and classification of periodic
variables. For this purpose the stacked pawprint data from the VDFS
CASU v >= 1.3 catalogues have been crossed matched with the VDFS CASU v1.3 tile catalogues into a
PostgreSql data-base. The Carpyncho infraestructure [https://carpyncho.gihub.io](https://carpyncho.gihub.io) is being developed
entirely in Python on top of a Custom-Framework for data processing`[2, 3]`.

For calculation purposes Carpyncho is layered on-top of a scientific-Python library stack that includes:

- Numpy`[5]`, Pandas`[6]` & Scipy`[7]`: for Numerical calculations
- Astropy`[8]`: for Processing of Fits tables, astrometric and photometric calculations.
- PyAstronomy`[9]`: for GLS, PDM and time conversion algorithms.
- feets`[10, 11]`: for feature extraction.
- Scikit-learn`[12]`: for machine learning algorithms.


[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3766908.svg)](https://doi.org/10.5281/zenodo.3766908)

----

## Python client

The [Carpyncho Python client](https://github.com/carpyncho/carpyncho-py)
can access and download any of this datesets and their metadata.

Also offers some functionalities to easy export the fileas to another formats

Please check: [https://github.com/carpyncho/carpyncho-py](https://github.com/carpyncho/carpyncho-py)

----

## Dealing with the `parquet.bz2` file format.

All our files are stored compresed in
[bzip2](https://en.wikipedia.org/wiki/Bzip2) format and need to be uncompressed.
This can be achieved with many visual compressors. From command line (in most
linux and osx) you can run

```console
$ bzip2 -k filename.parquet.bz2
```

Note, that this command will not preserve original archive file.

To preserve the original archive, add the `-k` option:

```console
$ bzip2 -dk filename.parquet.bz2
```

Apache Parquet is a free and open-source column-oriented data storage format.
It provides efficient data compression and encoding schemes with enhanced
performance to handle complex data in bulk.

Apache Parquet is implemented using the record-shredding and assembly
algorithm, which accommodates the complex data structures that can be used to
store the data. The values in each column are physically stored in contiguous
memory locations and this columnar storage provides the following benefits:

- Column-wise compression is efficient and saves storage space
- Compression techniques specific to a type can be applied as the column
  values tend to be of the same type
- Queries that fetch specific column values need not read the entire row data
  thus improving performance
- Different encoding techniques can be applied to different columns

This lines was extracted from
[The wikipedia Apache Parquet article](https://en.wikipedia.org/wiki/Apache_Parquet)


**Python**

The easy way is to use the [Carpyncho Python client](https://github.com/carpyncho/carpyncho-py),
but if you wan't to manually download and manipulate the files you need to
first install pandas and pyarrow with

```console
$ pip install pandas pyarrow
```

and then from the Python code/terminal

```python

# load the library into memory
>>> import pandas as pd

# read the parquet file into a dataframe
>>> pd.read_parquet("filename.parquet")
```

Check for more info
[here](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_parquet.html)

**R**

```R
# install the arrow library (only once)
> install.packages("arrow", repos = "https://dl.bintray.com/ursalabs/arrow-r")

# load the library into memory
> library("arrow")

# read the parquet file into a dataframe
> df = read_parquet("filename.parquet", as_data_frame=TRUE)

```

More info about the *arrow* library for R can be found here:
[arrow for R](https://cran.r-project.org/web/packages/arrow/index.html)

----

## Contact

**You can contact me at:** [jbcabral@unc.edu.ar](mailto:jbcabral@unc.edu.ar)

----

## Code Repository & Issues

[https://github.com/carpyncho/carpyncho.github.io](https://github.com/carpyncho/carpyncho.github.io)

----

## Citation

If you use Carpyncho in a scientific publication, we would appreciate
check our [citation page](https://github.com/carpyncho/carpyncho.github.io/blob/master/CITE.md)

----

## License

Carpyncho is relases under [BSD 3-Clause License](https://github.com/carpyncho/carpyncho.github.io/blob/master/LICENSE)

----

## Acknowledgments

This work was partially supported by the Consejo Nacional de Investigaciones Científicas y Tecnicas
(CONICET, Argentina) and the Secretara de Ciencia y Tecnología de la
Universidad Nacional de Córdoba (SeCyT-UNC, Argentina).
The authors were supported by a fellowship from
CONICET. Some processing was achieved with the Argentine
VO (NOVA) infrastructure, the Centro Franco Argentino de Ciencias de la Información y de Sistemas (CIFASIS-UNR);
and the Instituto De Astronomía Teórica Y Experimental (IATE-OAC-UNC)
for which the authors express their gratitude.

Storage provide by the Universidad Nacional de Córdoba (UNC), and
Google Suite. Hosting by Github Pages.

**Links**

- [CIFASIS-UNR](https://www.cifasis-conicet.gov.ar/)
- [IATE-OAC-UNC](http://iate.oac.uncor.edu/)
- [UNC](https://www.unc.edu.ar/)
- [CONICET](https://www.conicet.gov.ar/)
- [SeCyT-UNC](https://www.unc.edu.ar/ciencia-y-tecnolog%c3%ada/)
- [NOVA](http://nova.conicet.gov.ar/)
- [Google Suite](https://gsuite.google.com/)
- [Github Pages](https://pages.github.com/)


## References

- `[1]`: Minniti, D., Lucas, P. W., Emerson, J. P., Saito, R. K., Hempel, M., Pietrukowicz, P., ... & Bandyopadhyay, R. M. (2010). VISTA Variables in the Via Lactea (VVV): The public ESO near-IR variability survey of the Milky Way. New Astronomy, 15(5), 433-443.
- `[2]`: Cabral, J. B., Sánchez, B., Beroiz, M., Domínguez, M., Lares, M., Gurovich, S., & Granitto, P. (2017). Corral framework: Trustworthy and fully functional data intensive parallel astronomical pipelines. Astronomy and computing, 20, 140-154.
- `[3]`: Cabral, J., Sanchez, B., Beroiz, M., Dominguez, M., Lares, M., Gurovich, S., & Granitto, P. (2018). CPF: Corral Pipeline Framework. Astrophysics Source Code Library.
- `[4]`: Forcier, J., Bissex, P., & Chun, W. J. (2008). Python web development with Django. Addison-Wesley Professional.
- `[5]`: Van Der Walt, S., Colbert, S. C., & Varoquaux, G. (2011). The NumPy array: a structure for efficient numerical computation. Computing in Science & Engineering, 13(2), 22.
- `[6]`: McKinney, W. (2012). Python for data analysis: Data wrangling with Pandas, NumPy, and IPython. " O'Reilly Media, Inc.".
- `[7]`: Jones, E., Oliphant, T., & Peterson, P. (2014). SciPy: Open source scientific tools for Python.
- `[8]`: Robitaille, T. P., Tollerud, E. J., Greenfield, P., Droettboom, M., Bray, E., Aldcroft, T., ... & Conley, A. (2013). Astropy: A community Python package for astronomy. Astronomy & Astrophysics, 558, A33.
- `[9]`: This work made use of PyAstronomy. https://github.com/sczesla/PyAstronomy
- `[10]`: Cabral, J. B., Sánchez, B., Ramos, F., Gurovich, S., Granitto, P. M., & Vanderplas, J. (2018). From FATS to feets: Further improvements to an astronomical feature extraction tool based on machine learning. Astronomy and computing, 25, 213-220.
- `[11]`: Cabral, J., Sanchez, B., Ramos, F., Gurovich, S., Granitto, P., & VanderPlas, J. (2018). feets: feATURE eXTRACTOR for tIME sERIES. Astrophysics Source Code Library.
- `[12]`: Pedregosa, F., Varoquaux, G., Gramfort, A., Michel, V., Thirion, B., Grisel, O., ... & Vanderplas, J. (2011). Scikit-learn: Machine learning in Python. Journal of machine learning research, 12(Oct), 2825-2830.

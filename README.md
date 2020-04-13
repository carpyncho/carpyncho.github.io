# Carpyncho web client

Carpyncho, a data mining catalog browser which we hope will reutilized to search for and characterize time variable data of the ~PiB size VVV/VVVx`[1]` survey.

Carpyncho is being developed for the detection and classification of periodic
and non-periodic (or transient variables). For this purpose the stacked pawprint data from the VDFS
CASU v 1.3 catalogues have been crossed matched with the VDFS CASU v1.3 tile catalogues into a
PostgreSql data-base. The Carpyncho infraestructure http://carpyncho.jbcabral.org/ is being developed
entirely in python on top of a Custom-Framework for data processing`[2, 3]` and a Django web-framework`[4]` (for the webapp).

For calculation purposes Carpyncho is layered on-top of a scientific-Python library stack that includes:

- Numpy`[5]`, Pandas`[6]` & Scipy`[7]`: for Numerical calculations
- Astropy`[8]`: for Processing of Fits tables, astrometric and photometric calculations.
- PyAstronomy`[9]`: for GLS, PDM and time conversion algorithms.
- feets`[10, 11]`: for feature extraction.
- Scikit-learn`[12]`: for machine learning algorithms.


## Help & discussion mailing list

**You can contact me at:** jbcabral@unc.edu.ar


## Code Repository & Issues

[https://github.com/carpyncho/carpyncho.github.io](https://github.com/carpyncho/carpyncho.github.io)


## Citation

If you use Carpyncho in a scientific publication, we would appreciate
check our [citation page](https://github.com/carpyncho/carpyncho.github.io/blob/master/CITE.md)


## License

Carpyncho is relases under [BSD 3-Clause License](https://github.com/carpyncho/carpyncho.github.io/blob/master/LICENSE)


**References**

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

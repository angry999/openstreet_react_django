from django.contrib import admin

from .models import FinalCSV, UserPortfolio, UserPortfolioStats, TDState

admin.site.register(FinalCSV)
admin.site.register(UserPortfolio)
admin.site.register(UserPortfolioStats)
admin.site.register(TDState)